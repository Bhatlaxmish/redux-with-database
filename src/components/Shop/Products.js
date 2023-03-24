import ProductItem from './ProductItem';
import classes from './Products.module.css';




const productsdata=[
  {
    id:'p1',
    price:5,
    title:"non  nonon",
    description:"the doa tn aasdf "
  },
   {
    id:'p1',
    price:5,
    title:"non  nonon",
    description:"the doa tn aasdf "
  },
   {
    id:'p1',
    price:5,
    title:"non  nonon",
    description:"the doa tn aasdf "
  },
   {
    id:'p1',
    price:5,
    title:"non  nonon",
    description:"the doa tn aasdf "
  },
]




const Products = (props) => {








  return (
    <section className={classes.products}>
      <p>{productsdata}</p>
      <h2>Buy your favorite products</h2>
      <ul>
        {productsdata.map(product=><ProductItem>

key={product.id},
id={product.id},
      title={product.title},id={product.id},
    price={product.price},
    description={product.description}
        </ProductItem>)}
        <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
      </ul>
    </section>
  );
};






export default Products;
