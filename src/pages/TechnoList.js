import TechnoItem from "../components/TechnoItem";

export default function TechnoList(props) {
const {technos} = props;
return(
  <div className="techno-list">
  <h1>All Technos</h1>
  <div>
    {technos.map(techno  =>(
       <TechnoItem techno={techno}/>
      ))
    }
  </div>
  </div>
)
}
