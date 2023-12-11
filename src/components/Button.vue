<template>
  <section>
    <h2>Button Demo</h2>
    <hr />
  </section>

  <section>
    <h3>Base</h3>

    <div class="buttons">
      <o-button variant="primary" label="Primary" />
      <o-button variant="secondary" label="Secondary" />
      <o-button variant="info" label="Info" />
      <o-button variant="success" label="Success" />
      <o-button variant="warning" label="Warning" />
      <o-button variant="danger" label="Danger" />
    </div>
  </section>

  <section>
    <h3>States</h3>

    <div class="buttons">
      <o-button label="Normal" />
      <o-button disabled label="Disabled" />
      <o-button rounded variant="light" label="Rounded" />
    </div>
  </section>

  <section>
    <h3>Outlined</h3>

    <div class="buttons">
      <o-button variant="primary" outlined label="Outlined" />
      <o-button variant="secondary" outlined label="Outlined" />
      <o-button variant="info" outlined label="Outlined" />
      <o-button variant="success" outlined label="Outlined" />
      <o-button variant="warning" outlined label="Outlined" />
      <o-button variant="danger" outlined label="Outlined" />
    </div>
  </section>

  <section>
    <h3>Inverted</h3>

    <div class="buttons">
      <o-button variant="primary" inverted label="Inverted" />
      <o-button variant="secondary" inverted label="Inverted" />
      <o-button variant="info" inverted label="Inverted" />
      <o-button variant="success" inverted label="Inverted" />
      <o-button variant="warning" inverted label="Inverted" />
      <o-button variant="danger" inverted label="Inverted" />
    </div>
  </section>

  <section>
    <h3>Icons</h3>

    <div class="buttons">
      <o-button variant="primary" size="small" icon-left="plus" label="Add" />
      <o-button variant="primary" icon-left="plus" label="Add" />
      <o-button variant="primary" size="medium" icon-left="plus" label="Add" />
      <o-button variant="primary" size="large" icon-left="plus" label="Add" />
    </div>

    <div class="buttons">
      <o-button variant="danger" icon-left="trash" label="Delete" />
      <o-button variant="danger" icon-right="trash" label="Delete" />
      <o-button variant="danger" icon-right="trash" />
    </div>
  </section>

  <section>
    <h3>Expanded</h3>

    <div class="buttons">
      <o-button variant="primary" expanded label="Expanded" />
    </div>
  </section>
</template>
