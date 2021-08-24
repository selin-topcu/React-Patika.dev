import PropsTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends, address }) {
  if (!isLoggedIn) {
    return <div> Giriş Yapılmadı</div>;
  }
  return (
    <div>
      {name} {surname} {age}
      {address.title} - {address.zip}
      {/* friends && yazma sebebimiz app.js de friends olarak yazı göndermesek bile console da hata vermeden çalışması iiçin */}
      {friends &&
        friends.map((friend) => (
          <div key={friend.id}>
            {friend.id} - {friend.name}
          </div>
        ))}
    </div>
  );
}

User.propsTypes = {
  name: PropsTypes.string.isRequired,
  surname: PropsTypes.string.isRequired,
  age: PropsTypes.oneOfType([PropsTypes.number, PropsTypes.string]),
  //   birden fazla veri tipi almak için oneOfType kullanılır
  isLoggedIn: PropsTypes.bool,
  friends: PropsTypes.array,
  address: PropsTypes.shape({
    title: PropsTypes.string,
    zip: PropsTypes.number,
  }),
};

//default olarak girşi yapma kısmının kontrolünde isLoggedIn e değer verilmezse false değerini verir
User.defaultProps = {
  isLoggedIn: false,
};
export default User;
