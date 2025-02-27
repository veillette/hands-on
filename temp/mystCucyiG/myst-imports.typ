#let admonition(body, heading: none, color: blue) = {
  let stroke = (left: 2pt + color.darken(20%))
  let fill = color.lighten(80%)
  let title
  if heading != none {
    title = block(width: 100%, inset: (x: 8pt, y: 4pt), fill: fill, below: 0pt, radius: (top-right: 2pt))[#text(11pt, weight: "bold")[#heading]]
  }
  block(width: 100%, stroke: stroke, [
    #title
  #block(fill: luma(240), width: 100%, inset: 8pt, radius: (bottom-right: 2pt))[#body]
])
}

#let importantBlock(body, heading: [Important]) = admonition(body, heading: heading, color: blue)

#let tipBlock(body, heading: [Tip]) = admonition(body, heading: heading, color: green)

#let warningBlock(body, heading: [Warning]) = admonition(body, heading: heading, color: yellow)

#let noteBlock(body, heading: [Note]) = admonition(body, heading: heading, color: blue)

#let cautionBlock(body, heading: [Caution]) = admonition(body, heading: heading, color: yellow)

#let breakableDefault = true

#import "@preview/tablex:0.0.9": tablex, cellx, hlinex, vlinex

#let tableStyle = (:)

#let columnStyle = (:)