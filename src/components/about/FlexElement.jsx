function FlexElement({ img, string, reverse, column = false }) {
  return (
    <>
      <div
        className={`flex-element ${reverse && 'reverse'} ${column && 'column'}`}
      >
        <img src={img} />
        <p>{string}</p>
      </div>
    </>
  );
}

export default FlexElement;
