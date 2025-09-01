<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A monorepo template combining <a href="http://nestjs.com/" target="_blank">NestJS</a> and <a href="https://colyseus.io/" target="_blank">Colyseus</a> for building scalable real-time multiplayer games and applications.</p>

<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Description

This is a monorepo template that combines [NestJS](https://nestjs.com/) and [Colyseus](https://colyseus.io/) for building scalable real-time multiplayer games and applications. The template provides a structured approach to developing applications that require both traditional REST APIs and real-time WebSocket communication.

### Features

- **Monorepo Structure**: Organized with NestJS CLI monorepo support
- **Dual Applications**:
  - `core`: Traditional NestJS REST API application
  - `colyseus`: Real-time multiplayer game server using Colyseus
- **TypeScript**: Full TypeScript support with proper configuration
- **Testing**: Jest configuration for both unit and e2e tests
- **Code Quality**: ESLint and Prettier configuration
- **Development Tools**: Hot reload, debugging support, and build optimization

### Project Structure

```
nest-colyseus-template/
├── apps/
│   ├── core/                 # Traditional NestJS REST API
│   │   ├── src/
│   │   │   ├── core.controller.ts
│   │   │   ├── core.module.ts
│   │   │   ├── core.service.ts
│   │   │   └── main.ts
│   │   └── test/
│   └── colyseus/            # Real-time multiplayer server
│       ├── src/
│       │   ├── app.controller.ts
│       │   ├── app.module.ts
│       │   ├── game.service.ts
│       │   ├── main.ts
│       │   ├── rooms/
│       │   │   └── main.room.ts
│       │   └── utils/
│       │       └── globals.ts
│       └── test/
├── dist/                    # Build output
├── nest-cli.json           # NestJS CLI configuration
├── package.json            # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## Installation

```bash
# Clone the repository
$ git clone <your-repo-url>
$ cd nest-colyseus-template

# Install dependencies
$ npm install
```

## Configuration

1. Copy the environment file:

```bash
$ cp .env.example .env
```

2. Configure the ports in your `.env` file:

```env
COLYSEUS_PORT=3000
CORE_PORT=3001
```

## Running the Applications

### Development Mode

```bash
# Start both applications in watch mode
$ npm run start:dev

# Start only the core application
$ npm run start:dev core

# Start only the colyseus application
$ npm run start:dev colyseus
```

### Production Mode

```bash
# Build the applications
$ npm run build

# Start in production mode
$ npm run start:prod
```

### Debug Mode

```bash
# Start with debugging enabled
$ npm run start:debug
```

## Testing

```bash
# Unit tests
$ npm run test

# Unit tests in watch mode
$ npm run test:watch

# e2e tests
$ npm run test:e2e

# Test coverage
$ npm run test:cov
```

## Code Quality

```bash
# Lint code
$ npm run lint

# Format code
$ npm run format
```

## Applications

### Core Application (Port 3001)

The core application is a traditional NestJS REST API that handles:

- HTTP requests and responses
- Database operations
- Authentication and authorization
- Business logic

### Colyseus Application (Port 3000)

The Colyseus application handles real-time multiplayer functionality:

- WebSocket connections
- Game room management
- Real-time state synchronization
- Player interactions

## Development

### Adding New Features

1. **For REST API features**: Add controllers, services, and modules in `apps/core/src/`
2. **For real-time features**: Add rooms and game logic in `apps/colyseus/src/rooms/`
3. **For shared code**: Consider creating a shared library in the monorepo

### Room Development

Rooms in Colyseus handle the game logic for multiplayer sessions. See `apps/colyseus/src/rooms/main.room.ts` for an example.

### API Development

Controllers and services in the core application handle traditional HTTP requests. See `apps/core/src/core.controller.ts` for an example.

## Base Template

This template is based on the original work from [chukmunnlee/nest-colyseus-template](https://github.com/chukmunnlee/nest-colyseus-template).

## Support

NestJS is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)
- Colyseus - [https://colyseus.io](https://colyseus.io/)

## License

This project is [MIT licensed](LICENSE).
