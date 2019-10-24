import React from "react";

export function Specifications({ specifications }) {
  if (specifications === "non-standard") {
    return (
      <>
        <h2>Specifications</h2>
        <p>
          This feature is non-standard and is not included in any official
          specification. Do not use it on production sites facing the Web: it
          will not work for every user. There may also be large
          incompatibilities between implementations and the behavior may change
          in the future.
        </p>
      </>
    );
  } else if (Array.isArray(specifications)) {
    return (
      <>
        <h2>Specifications</h2>
        <ul>
          {specifications.map(specification => (
            <li key={specification.url}>
              <a href={specification.url}>{specification.title}</a>
            </li>
          ))}
        </ul>
      </>
    );
  } else {
    throw new Error("Neither recognized string or array");
  }
}