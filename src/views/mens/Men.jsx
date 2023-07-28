import { Collection } from "../../components/template/Collection"
import { SectionPages } from "../../components/template/SectionPages"
import { menCasual, menFeatured, menLatest } from "../../services/data"

import img1 from "../../assets/collection/collectionKids1.png";
import img2 from "../../assets/collection/collectionKids2.png";
export const Men = () => {
  
  return (
    <div className="menContainer">
        <div className="container">
            <SectionPages  items={menLatest} sectionTitle="men's latest"/>
            <SectionPages  items={menFeatured} sectionTitle="featured"/>
            <SectionPages  items={menCasual} sectionTitle="casual"/>

            </div>
            <Collection title="Kid's Collection" img1={img1} img2={img2} />
    </div>
  )
}
