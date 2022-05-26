function gramophone(bandName, album, songName) {
    let plateFullRotation = 2.5;
    let songDuration = (album.length * bandName.length) * songName.length / 2;
    let rotations = Math.ceil(songDuration / plateFullRotation);
    console.log(`The plate was rotated ${rotations} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');