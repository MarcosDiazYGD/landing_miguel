function FlexElement({ img, string, reverse }) {
  return (
    <>
      <div className={`flex-element ${reverse && 'reverse'}`}>
        <img src={img} />
        <p>{string}</p>
      </div>
    </>
  );
}

export default FlexElement;
