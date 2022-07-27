const stylesheet = document.styleSheets[0];
let elementRule;

const openAndClose = (numOfDiv) => {
  openCard(numOfDiv);
  for (let i = 1; i <= 5; i++) {
    if (i !== numOfDiv) {
      closeCard(`div${i}`, i);
    }
  }
};

const openCard = (numOfDiv) => {
  document.querySelector(`#div${numOfDiv} :nth-child(2)`).style.display =
    "block";

  //asigning the ""::after pseudo-element" css rule to elementRule
  for (let i = 0; i < stylesheet.cssRules.length; i++) {
    if (stylesheet.cssRules[i].selectorText === `#headline${numOfDiv}::after`) {
      elementRule = stylesheet.cssRules[i];
    }
  }
  //making the change
  elementRule.style.setProperty("transform", "rotate(180deg)");
};

const closeCard = (idOfDiv, numOfHeadline) => {
  document.querySelector(`#${idOfDiv} :nth-child(2)`).style.display = "none";
  //asigning the ""::after pseudo-element" css rule to elementRule
  for (let i = 0; i < stylesheet.cssRules.length; i++) {
    if (
      stylesheet.cssRules[i].selectorText === `#headline${numOfHeadline}::after`
    ) {
      elementRule = stylesheet.cssRules[i];
    }
  }
  //making the change
  elementRule.style.setProperty("transform", "rotate(0deg)");
};
