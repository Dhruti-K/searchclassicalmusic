var pieces = [
  {
   name: 'Swan Lake Theme',
   composer: 'Tchaikovsky',
   details: 'N/A',
   key: 'B Minor'
  }
];

function results(pieceInt, compInt, detailsInt) {
  var pieceName = `<h3 class="remove">${pieceInt}</h3>`;
  var compName = `<h4 class="remove">${compInt}</h3>`;
  var details = `<p class="remove">${detailsInt}</p>`;
  $('#form').append(pieceName, compName, details);
}

function findValues (pieceInt, compInt, detailsInt) {
  for (var i = 0; i < pieces.length; i ++) {
    if (pieces[i].name.includes(pieceInt) && pieceInt != '' || pieces[i].composer.includes(compInt) && compInt != '' || pieces[i].details.includes(detailsInt) && detailsInt != '') {
      results(pieces[i].name, pieces[i].composer, pieces[i].details);
    }
  }
}

$('#form').submit(function(event) {
  var remove = $('.remove');
  remove.remove();
  event.preventDefault();
  findValues($('#name').val(), $('#composer').val(), $('#details').val());
});