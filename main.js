$(function(){ //The jQuery shortcut for 'when the html document is fully loaded do this function'
  console.log('JS Loaded!', $); //Tesing if this file and the jQuery are linked correctly in the html file

  var responseData = ''; //An empty string to store the response of the API from

  $.getJSON('https://content.api.pressassociation.io/v1/item?sort=firstcreated%3Adesc&subject=paservice%3Anews&query=&accept=json&apikey=wfameajjkqnfjd6rsgwb5ys8')
    .done(function(res) { // Do the get request..
      responseData = res; // Save the response we get and save it to the global variable responseData
      console.log(responseData);

      $('#headline0').text(responseData.item[0].headline);
      $('#abstract0').text(responseData.item[0].description_text);
        $('#featureimage0').append('<img src="' + responseData.item[0].associations.featureimage.renditions["16x9"].href + '" alt="' + responseData.item[0].associations.featureimage.description_text + '"/>');


      $('#headline1').text(responseData.item[1].headline);
      $('#abstract1').text(responseData.item[1].description_text);
      $('#featureimage1').append('<img src="' + responseData.item[1].associations.featureimage.renditions["16x9"].href + '" alt="' + responseData.item[1].associations.featureimage.description_text + '"/>');


      $('#headline2').text(responseData.item[2].headline);
      $('#abstract2').text(responseData.item[2].description_text);
      $('#featureimage2').append('<img src="' + responseData.item[2].associations.featureimage.renditions["16x9"].href + '" alt="' + responseData.item[2].associations.featureimage.description_text + '"/>');


      $('#headline3').text(responseData.item[3].headline);
      $('#abstract3').text(responseData.item[3].description_text);
      $('#featureimage3').append('<img src="' + responseData.item[3].associations.featureimage.renditions["16x9"].href + '" alt="' + responseData.item[3].associations.featureimage.description_text + '"/>');


      $('#headline4').text(responseData.item[4].headline);
      $('#abstract4').text(responseData.item[4].description_text);
      $('#featureimage4').append('<img src="' + responseData.item[4].associations.featureimage.renditions["16x9"].href + '" alt="' + responseData.item[4].associations.featureimage.description_text + '"/>');

      $('#headline5').text(responseData.item[5].headline);
      $('#abstract5').text(responseData.item[5].description_text);
      $('#featureimage5').append('<img src="' + responseData.item[5].associations.featureimage.renditions["16x9"].href + '" alt="' + responseData.item[5].associations.featureimage.description_text + '"/>');

      $('#headline6').text(responseData.item[6].headline);
      $('#abstract6').text(responseData.item[6].description_text);
      $('#featureimage6').append('<img src="' + responseData.item[6].associations.featureimage.renditions["16x9"].href + '" alt="' + responseData.item[6].associations.featureimage.description_text + '"/>');

      $('#headline7').text(responseData.item[7].headline);
      $('#abstract7').text(responseData.item[7].description_text);
      $('#featureimage7').append('<img src="' + responseData.item[7].associations.featureimage.renditions["16x9"].href + '" alt="' + responseData.item[7].associations.featureimage.description_text + '"/>');




    })
    .fail(function(error) {  // This will run if the API request fails...
      console.log('An error occured getting api data:', error);
      $('.headline').text('An error occured getting api data, quick tell Partha');
    });
});




function subsetOfString(givenString, maxNumberOfCharacters, after) {
	if (givenString.length <= maxNumberOfCharacters) {
  	return givenString;
  } else {
  	if (typeof after === 'undefined') after = '';
  	var short = givenString.substr(0, maxNumberOfCharacters);
    return short.substr(0, short.lastIndexOf(" ")) + after;
  }
}

console.log( subsetOfString(content, 100, '... read more.') );

console.log( subsetOfString(content, 20, '... read more.') );

console.log( subsetOfString(content, 500, '... read more.') );
