import { Collection } from "../../components/template/Collection"
import { SectionPages } from "../../components/template/SectionPages"
import { kidCasual, kidFeatured, kidLatest } from "../../services/data"
import img1 from "../../assets/collection/collectionWomen1.png";
import img2 from "../../assets/collection/collectionWomen2.png";
import img3 from "../../assets/collection/collectionMen1.png";
import img4 from "../../assets/collection/collectionMen2.png";

export const Kids = () => {
  return (
    <div className="kidContainer">
        <div className="container">
            <SectionPages  items={kidLatest} sectionTitle="kid's latest"/>
            </div>
            <Collection title="Men's Collection" img1={img3} img2={img4} />

            <div className="container my-5">
            <SectionPages  items={kidFeatured} sectionTitle="featured"/>
            <SectionPages  items={kidCasual} sectionTitle="casual"/>
            </div>
            <Collection title="Women Collection" img1={img1} img2={img2}/>

    </div>
  )
}
