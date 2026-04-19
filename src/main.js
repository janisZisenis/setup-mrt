const tc = require('@actions/tool-cache');
const core = require('@actions/core');

async function run() {
    try {
        const version = core.getInput('mrt-version');
        const platform = process.platform;

        if (platform !== 'linux' && platform !== 'darwin') {
            throw new Error(`Unsupported platform: ${platform}`);
        }

        let mrtPath = tc.find('mrt', version, 'x64');

        if (mrtPath) {
            core.info(`Found mrt ${version} in tool cache`);
        } else {
            core.info(`Downloading mrt ${version} for ${platform}`);

            const url = `https://github.com/janisZisenis/mrt-cli/releases/download/v${version}/mrt-${platform}-amd64`;
            const downloadPath = await tc.downloadTool(url);
            mrtPath = await tc.cacheFile(downloadPath, 'mrt', 'mrt', version, 'x64');

            core.info(`MRT version ${version} installed successfully`);
        }

        core.addPath(mrtPath);
    } catch (error) {
        core.setFailed(`Action failed with error: ${error.message}`);
    }
}

run();