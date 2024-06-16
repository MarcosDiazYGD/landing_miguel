import imgs from '../../assets/img/tecnologias/imports';

function Tecnologias() {
  return (
    <div className={`tecnologias `}>
      <div>
        <img src={imgs.meta} />
        <img src={imgs.aws} />
        <img src={imgs.digitalOcean} />
      </div>
      <div>
        <img src={imgs.verne} />
        <img src={imgs.nuevaMetodologia} />
        <img src={imgs.obsidian} />
        <img src={imgs.webScrap} />
      </div>
    </div>
  );
}

export default Tecnologias;
