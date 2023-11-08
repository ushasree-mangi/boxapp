const Box = (props)  {
  //  Write your code here.
  const {box-styling,boxName}=props;
  return { 
      <div className={`box ${box-styling}`}>
          <p className="box-name-styling">{boxName}</p>
      </div>
  }
}

const element = (
  //  Write your code here.
  <div className="bg-container">
       <div className="content-container">
           <h1 className="heading">Boxes</h1>
           <div className="boxes-container">
                 <Box boxName="Small" box-styling="yellow-small-box" />
                 <Box boxName="Medium" box-styling="blue-medium-box" />
                 <Box boxName="Large" box-styling="pink-large-box" />
           </div>
       </div>
  </div> 
);

ReactDOM.render(element, document.getElementById("root"));
