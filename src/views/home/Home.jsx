import { Header } from "../../components/header/Header"
import { Section } from "../../components/template/Section"
import { kidLatest, menLatest, womenLatest } from "../../services/data";

export const Home = () => {

  return (
    <div>
        <Header/>

        <Section items={menLatest} sectionTitle="men's latest" sectionText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corporis odit odio cupiditate beatae illo."/>
        <Section items={womenLatest} sectionTitle="women's latest" sectionText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corporis odit odio cupiditate beatae illo."/>
        <Section items={kidLatest} sectionTitle="kid's latest" sectionText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corporis odit odio cupiditate beatae illo."/>
    </div>
  )
}
