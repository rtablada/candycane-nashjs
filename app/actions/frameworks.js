import Action from 'candycane/dist/http/action';

export default class extends Action {
  data() {
    // Do something with KNEX and PG...

    // We need to get KNEX into our action...
    // We don't want to pass this around using imports...
    // We don't want a global...
    // Hopefully at some point we might want to mock KNEX for testing

    // App container
    const knex = this.app.make(`db`);

    return knex(`frameworks`).select();
  }
}
