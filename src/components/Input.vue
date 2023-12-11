<template>
  <section>
    <h2>Input Demo</h2>
    <hr />
  </section>

  <section>
    <h3>Base</h3>

    <o-field label="Name">
      <o-input expanded />
    </o-field>

    <o-field label="Email" variant="danger" message="This email is invalid">
      <o-input type="email" value="john@" maxlength="30" expanded />
    </o-field>

    <o-field
      label="Username"
      variant="success"
      message="This username is available">
      <o-input value="johnsilver" maxlength="30" />
    </o-field>

    <o-field label="Password">
      <o-input type="password" value="iwantmytreasure" password-reveal>
      </o-input>
    </o-field>

    <o-field label="Message">
      <o-input maxlength="200" type="textarea" />
    </o-field>

    <o-field>
      <o-input placeholder="No label" />
    </o-field>

    <o-field label="Rounded">
      <o-input placeholder="No label" rounded />
    </o-field>

    <o-field label="Disabled">
      <o-input placeholder="Disabled" disabled />
    </o-field>
  </section>

  <section>
    <h3>Variants</h3>

    <o-field label="Primary" variant="primary">
      <o-input placeholder="Primary" />
    </o-field>

    <o-field label="Secondary" variant="secondary">
      <o-input placeholder="Secondary" />
    </o-field>

    <o-field label="Success" variant="success">
      <o-input placeholder="Success" />
    </o-field>

    <o-field label="Info" variant="info">
      <o-input placeholder="Info" />
    </o-field>

    <o-field label="Warning" variant="warning">
      <o-input placeholder="Warning" />
    </o-field>

    <o-field
      label="Error"
      variant="danger"
      message="You can have a message too">
      <o-input placeholder="Error" />
    </o-field>
  </section>

  <section>
    <h3>Sizes</h3>

    <o-field>
      <o-input placeholder="small" size="small" icon="user" />
    </o-field>

    <o-field>
      <o-input placeholder="default" icon="user" />
    </o-field>

    <o-field>
      <o-input placeholder="medium" size="medium" icon="user" />
    </o-field>

    <o-field>
      <o-input placeholder="Large" size="large" icon="user" />
    </o-field>
  </section>

  <section>
    <h3>With Icons</h3>

    <o-field>
      <o-input
        placeholder="Search..."
        type="search"
        icon="search"
        icon-clickable>
      </o-input>
    </o-field>

    <o-field>
      <o-input
        placeholder="Search..."
        type="search"
        icon-right="search"
        icon-right-clickable>
      </o-input>
    </o-field>

    <o-field>
      <o-input
        placeholder="Email"
        type="email"
        icon="envelope"
        icon-right="times-circle"
        icon-right-clickable>
      </o-input>
    </o-field>
  </section>
</template>
