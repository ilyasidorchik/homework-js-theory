for (var i = 0; i < 3; i++) {
  setTimeout(
    (savedI) => {
      console.log(savedI);
    },
    0,
    i
  );
}
