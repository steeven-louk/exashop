import { Collection } from "../../components/template/Collection"
import { SectionPages } from "../../components/template/SectionPages"
import { womenCasual, womenFeatured, womenLatest } from "../../services/data"
import img1 from "../../assets/collection/collectionMen1.png"
import img2 from "../../assets/collection/collectionMen2.png"
export const Women = () => {
  return (
    <div className="womenContainer">
        <div className="container">
            <SectionPages  items={womenLatest} sectionTitle="women latest"/>
            <SectionPages  items={womenFeatured} sectionTitle="featured"/>
            </div>
            <Collection title="Kid's Collection" img1={img1} img2={img2} />
            <div className="container my-5">
            <SectionPages  items={womenCasual} sectionTitle="casual"/>
            </div>
    </div>
  )
}
