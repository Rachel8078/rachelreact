import React from 'react';

function Nav() {
  const categories = [
      {
        name: "about",
        description: "about the developer"
      },
      {
        name: "contact",
        description: "links to contact developer"
      },
      {
        name: "portfolio",
        description: "images and links to projects completed by developer"
      },
      {
        name: "resume",
        description: "link to developer's resume"
      },
    ]

    function categorySelected(name) {
      console.log(`${name} clicked`)
    }

  return (
    <header>
  <h2>
    <a href="/">
      <span role="img" aria-label="woman with laptop"> 👩‍💻 </span> Rachel Marriott
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
      <li className="mx-2">
        <a href="#portfolio">
          Portfolio
        </a>
      </li>
      <li className="mx-2">
        <a href="#resume">
          Resume
        </a>
      </li>
      {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
          <span onClick={() => categorySelected(category.name)}>
            {category.name}
          </span>
        </li>
      ))}
    </ul>
  </nav>
</header>
  );
}

export default Nav;