export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      sayHelloPlugin: () => console.log(`Hello from plugin`),
    },
  };
});
