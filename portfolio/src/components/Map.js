function Map() {
  const arr = [
    { name: 'Akshay'},
    { name: 'Ab'},
    { name: 'dds'},
    { name: 'ds'}
  ];

  const num = arr.map((array) => {
    return <li>{array.name}</li>;
  });
  return (
    <div>
      <ul>{num}</ul>
      <select name="id">
        <option>sc</option>
        <option>sc</option>
        <option>sc</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
      </select>
    </div>
  );
}
export default Map;
