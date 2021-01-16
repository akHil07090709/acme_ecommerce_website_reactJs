import React from "react";
import { Helmet } from "react-helmet";

export default function Alert() {
  window.scrollTo(0, 0);
  return (
    <>
      <Helmet>
        <title>How we're responding to COVID-19</title>
      </Helmet>
      <div className="page-title-section">
        <div className="container">
          <h1 className="page-title">How we're responding to COVID-19</h1>
        </div>
      </div>
      <div className="content-section">
        <div className="container">
          <div className="w-richtext">
            <h2>What’s a Rich Text element?</h2>
            <p>
              The rich text element allows you to create and format headings,
              paragraphs, blockquotes, images, and video all in one place
              instead of having to add and format them individually. Just
              double-click and easily create content.
            </p>
            <h4>Static and dynamic content editing</h4>
            <p>
              A rich text element can be used with static or dynamic content.
              For static content, just drop it into any page and begin editing.
              For dynamic content, add a rich text field to any collection and
              then connect a rich text element to that field in the settings
              panel. Voila!
            </p>
            <h4>How to customize formatting for each rich text</h4>
            <p>
              Headings, paragraphs, blockquotes, figures, images, and figure
              captions can all be styled after a className is added to the rich
              text element using the "When inside of" nested selector system.
            </p>
            <p>&zwj;</p>
          </div>
        </div>
      </div>
    </>
  );
}
