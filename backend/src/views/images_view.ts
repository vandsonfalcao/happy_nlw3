import Image from '../models/Image';

export default {
  render(image: Image) {
    return {
      id: image.id,
      //nescessario trocar url para o endereço e porta do servidor backend atual
      url: `http://192.168.0.104:3333/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
