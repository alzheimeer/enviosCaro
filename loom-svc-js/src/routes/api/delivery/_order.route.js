const orderService = require('../../../services/delivery/orderService');

class OrderRoute {
  constructor(dependencies) {
    /* Base Properties */
    this._dependencies = dependencies;
    this._utilities = this._dependencies.utilities;
    this._console = this._dependencies.console;
    this._services = this._dependencies.services;
    this.EntityService = this._services.UserService; 
  }

  // En parAMS LLEGA TANTO PARAMETROS COMO BODY
  async get({ params }) {
    try {
      
      const order = await orderService.get(params.id);
      return order;
    } catch (error) {
      this._console.error(error);
      return this._utilities.io.response.error();
    }
  } 

  // En parAMS LLEGA TANTO PARAMETROS COMO BODY
  async getall() {
    console.log('getall');
    try {
      const orders = await orderService.getAll();
      return orders;
    } catch (error) {
      this._console.error(error);
      return this._utilities.io.response.error();
    }
  }

  // En parAMS LLEGA TANTO PARAMETROS COMO BODY
  async create({ params }) {
    try {
      const newOrder = await orderService.create(params);
      return newOrder;
    } catch (error) {
      this._console.error(error);
      return this._utilities.io.response.error();
    }
  }

  // En parAMS LLEGA TANTO PARAMETROS COMO BODY
  async update({ params }) {
    console.log('updateroute');
    try {
      const order = await orderService.update(params.id, params);
      return order;

    } catch (error) {
      this._console.error(error);
      return this._utilities.io.response.error();
    }
  }

  async deleteorder({ params }) {
    try {
      await orderService.deleteorder(params.id);
      return {msn: 'REGISTRO BORRADO'}

    } catch (error) {
      this._console.error(error);
      return this._utilities.io.response.error();
    }
  }
}

module.exports = OrderRoute;
