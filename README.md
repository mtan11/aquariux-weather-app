# Weather Application

## Table of Contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Source Tree](#source-tree)
- [Design Decisions](#design-decisions)
- [Technologies Used](#technologies-used)

## Description

This is an Weather application that allows users to search for weather information by city and country. The application displays the weather information based on user input, maintains a search history, and allows users to switch between dark and light themes.

## Prerequisites

Before setting up the Weather Application, ensure you have the following prerequisites in place:

- Node.js and npm installed on your development machine. You can download them from [https://nodejs.org/](https://nodejs.org/). (Recommend latest version 20.9.0)
- A code editor or Integrated Development Environment (IDE) for making any code changes, if required.

## Installation

Follow these steps to set up the test web application:

1. Download the compressed folder and unzip it

2. Open the the project in IDE

3. Install Dependencies: `npm install`

4. Start the Development: `npm start`

This command will start the development server and open the web application in your default web browser. The application should be available at http://localhost:8000.

## Source Tree

```
src/
├── __mocks__/
├── assets/
├── components/
├── constants/
├── hooks/
├── layout/
├── pages/
├── services/
├── styles/
├── types/
├── utils/
├── main.tsx
├── router.tsx
├── setupTests.tsx
```

## Design Decisions

Here are some key design decisions made during the development of the web application:

- **User-Friendly Interface:** The application provides a user-friendly interface with clear instructions, and error handling to ensure a seamless using process.

- **Modular Code Structure:** The codebase is structured with reusable components, making it easy to maintain and extend in the future.

- **Error Handling:** Errors are handled with user-friendly messages to guide users in case of input errors or failed when using.

## Technologies Used

- React
- Tailwind CSS
- Vite
- Storybook
- React testing library
- Zod
- React Query: I use this for efficient, cache-based API calls, as recommended by the official React documentation.
