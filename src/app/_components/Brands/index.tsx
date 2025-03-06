import "./index.scss";

export const Brands = () => {
  const brands: number[] = [1, 2, 3, 4, 5];

  return (
    <div id="brands">
      <ul>
        {brands.map((brand: number) => (
          <li>
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
    </div>
  );
};

export default Brands;
