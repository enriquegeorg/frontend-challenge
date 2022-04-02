import { Hero } from "../../components/LandingPage/Hero";
import { HeroIllustration } from "../../components/LandingPage/HeroIllustration";
import { Layout } from "../../components/LandingPage/Layout";

function Home() {
  return (
    <Layout>
      <Hero
        title="Lista de usuário da API"
        content="Este é um template free, todos os créditos para os envolvidos no projeto: https://github.com/lukemcdonald/holly-react"
        illustration={HeroIllustration}
      />
    </Layout>
  );
}

export { Home };
