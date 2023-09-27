import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
import Doughnut2d from "./Charts/Doughnut2d";
const Repos = () => {
  const { repos } = React.useContext(GithubContext);
  // reduces data to a single object, consisting of label as language & percentage as value
  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
      return total;
    }
    total[language] = {
      ...total[language],
      value: total[language].value + 1,
      stars: total[language].stars + stargazers_count,
    };
    return total;
  }, {});
  //sorted by the nonincreasing order
  const mostUsed = Object.values(languages).sort((a, b) => {
    return b.value - a.value;
  });
  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.start - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    });
  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );
  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();
  const chartData = [
    { label: "JavaScript", value: 40 },
    { label: "TypeScript", value: 38 },
    { label: "Python", value: 9 },
    { label: "Java", value: 7 },
  ];
  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={mostUsed} />
        <Column3D data={stars} />
        <Doughnut2d data={mostPopular} />
        <Bar3D data={forks} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
