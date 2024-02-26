//api call for english to french
const translateText = async (engText) => {
  let resp = await fetch(
    `https://api.mymemory.translated.net/get?q=${engText}&langpair=en|fr`
  );

  let data = await resp.json();

  return data.responseData.translatedText;
};


//controller for the post route
export const translateTextToFrench = async (req, res) => {
  if (!req.body || !req.body.text) {
    return res.status(400).json({
      error: 'Missing or invalid request body. Please provide the "text" key.',
    });
  }

  //Perform translation
  const englishText = req.body.text;
  const frenchTranslation = await translateText(englishText);

  //Check if translation was not successful
  if (!frenchTranslation) {
      return res.status(500).json({ error: "Failed to translate text." });
  }

  //Respond with the translated text
  return res.json({ translation: frenchTranslation });
};
