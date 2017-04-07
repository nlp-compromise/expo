'use strict';
import React from 'react';
import Radium from 'radium';
import Twitter from 'react-icons/lib/fa/twitter'
import Slack from 'react-icons/lib/fa/slack'
import GitHub from 'react-icons/lib/fa/github'
import styler from 'react-styling/flat';

const style = styler`
table:
  width:90%
  border-spacing: 10
  marginLeft:5%
  marginRight:5%
  text-align:center;
  color:black;
  link:
    font-size:12
    color:darkgrey
  href:
    text-decoration:none
    color:black
`
class Links extends React.Component {
  constructor() {
    super()
    this.css = style;
  }
  render() {
    let css = this.css
    return (
      <table style={css.table}>
        <tbody>
          <tr>
            <td>
              <a style={css.table.href} href='https://github.com/nlp-compromise/compromise'>
                <GitHub size={50}/>
                <div style={css.table.link}>github</div>
              </a>
            </td>
            <td>
              <a style={css.table.href} href='https://www.twitter.com/compromisejs'>
                <Twitter size={50}/>
                <div style={css.table.link}>twitter</div>
              </a>
            </td>
            <td>
              <a style={css.table.href} href='http://slack.compromise.cool'>
                <Slack size={50}/>
                <div style={css.table.link}>slack</div>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

Links = Radium(Links);
module.exports = Links