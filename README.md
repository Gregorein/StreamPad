![StreamPad Logo](logo.png)

# StreamPad

_This repository is a work-in-progress project. Proper setup instructions and documentation will be provided once the core features are complete._

StreamPad is the core desktop application for controlling and customizing streaming experiences. It provides a highly customizable interface for streamers, with support for plugins and integrations with popular streaming platforms like OBS and Twitch.

## Overview

StreamPad includes the following key components:

1. **User-Customizable UI**: Offers a flexible interface where users can add and arrange various components such as buttons, knobs, sliders, and more - The UI can be tailored to specific needs, with additional components available from community contributions.
2. **Support for Various Mobile & Touch Devices**: Designed to work seamlessly across different devices, including mobile phones and tablets, with support for touch inputs and gestures.
3. **Plugin System**: Extensible API for plugins, allowing integrations with third-party services.
4. **System Tray Integration**: Quick access to key functionalities via the system tray.
5. **Easy Integration** with popular streaming tools and platforms.

### TODOs
- drag-n-drop support for easy installation of plugins & ControlUI configs.
- localisation +i18next?
- webserver + Express.js in electron
- Plugins:
	- Twitch
	- OBS
	- Soundboard
	- StreamElements
	- StreamLabs
	- audio interfaces
	- VtubeStudio

## Documentation
For detailed documentation, including API references and setup guides, visit the docs directory.

## Getting Started
### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) 
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Project Setup

#### Install

```bash
$ yarn
```

#### Development

```bash
$ yarn dev
```

#### Build

```bash
# For windows
$ yarn build:win

# For macOS
$ yarn build:mac

# For Linux
$ yarn build:linux
```

## License

StreamPad is licensed under the GNU General Public License (GPL). See the [LICENSE](LICENSE) file for more details.

## Contribution

We welcome contributions! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute.

## Community

Join our community on GitHub Discussions for support, feature requests, and collaboration.
