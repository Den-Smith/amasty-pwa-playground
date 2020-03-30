/*
 * Map Magento 2.3.1 schema changes to Venia 2.0.0 proptype shape
 * to maintain backwards compatibility.
 */

export default product => {
    const { description, small_image } = product;

    const newDescription =
        typeof description === 'object' ? description.html : description;
    const newSmallImage =
        typeof small_image === 'object' ? small_image.url : small_image;

    return {
        ...product,
        description: newDescription,
        small_image: newSmallImage
    };
};
