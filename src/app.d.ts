// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    interface PageData {
      status: number,
      colleges: any
    }
    // interface Platform {}
  }
}

export {};
