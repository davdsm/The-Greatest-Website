import "./index.scss";

export const Brands = () => {
  const brands: number[] = [1, 2, 3, 4, 5];

  return (
    <section id="brands">
      <ul>
        {brands.map((brand: number) => (
          <li key={brand}>
            <img
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-delay={brand * 100}
              src={`/brands/brand${brand}.png`}
              alt={`DAVDSM Brand nº ${brand}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Brands;
