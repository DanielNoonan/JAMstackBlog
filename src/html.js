import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}


          {/* SHOPROCKET START */}
          {/* <!-- jQuery --> */}
          {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> */}

          {/* <!-- Shoprocket JavaScript --> */}
          {/* <script>var $=jQuery.noConflict();</script> */}
          {/* <script>var JSR=jQuery;</script> */}
          {/* <script language="javascript" src="https://space.shoprocket.co/frontend/v8/sr.min.js"></script> */}
          {/* <input type="hidden" name="sr-companyid" id="sr-companyid" value="13878"/> */}

          {/* <!-- Shoprocket Basket Widget --> */}
          {/* <div id="sr-basket-widget" className="sr-right"><span className="sr-confirm-amount"></span></div> */}
          {/* SHOPROCKET END */}

                         
        </body>
        
      </html>
    )
  }
}
