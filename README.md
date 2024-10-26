# setup-mrt

The `setup-mrt` is a GitHub Action that sets up the [*Multi-Repository-Tool*](https://github.com/janisZisenis/multi-repo-tool) in your workflow enabling the Github runner to run your automation scripts usint `mrt`.

## Features

- Installs and sets up the *Multi-Repository-Tool*
- Caches the installed binaries for subsequent pipeline runs

## Usage

To use the `setup-mrt` action in your GitHub workflow, add the following step to your workflow file:

```yaml
steps:
  - uses: actions/checkout@v2
  - name: Setup MRT
      uses: janisZisenis/setup-mrt@v1
      with:
      version: '0.1.0' #Find the versions here: https://github.com/janisZisenis/multi-repo-tool/releases 
  - name: Run MRT
      run: mrt version # Replace this with your MRT command
```

## License

This project is licensed under the MIT License, which provides permissions for free use, modification, and distribution of the software under the terms specified in the LICENSE file. For more information, please refer to the [LICENSE](./LICENSE) and [NOTICE](./NOTICE.md) files included in this repository.
