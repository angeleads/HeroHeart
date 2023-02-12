Install expo

npm install expo-cli --global
npx expo login
or
npx expo register

check you're logged in
npx expo whoami

create project 
expo init "name of the project"

enter the project
cd "name of the project"

run the project
expo start

Get started with tailwind
Install tailwind

yarn add nativewind
yarn add --dev tailwindcss

generate tailwind.config.js
npx tailwindcss init

add content to the tailwind.config.js
content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],

add plugins to the babel.congfig.js
plugins: ['nativewind/babel'],


