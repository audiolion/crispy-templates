=======
Layouts
=======

Crispy forms allows us to override the `template` attribute passed to their layout objects, by including the `crsipy_templates` template you will get the new template format.

Field
-----

These are templates related to the `Field` layout object.

Radio Button Group Select
~~~~~~~~~~~~~~~~~~~~~~~~~

Instead of the regular dropdown select widget or a RadioSelect widget we can create a radio button group.

Radio button groups should be used when the number of choices is less than five. See https://uxdesign.cc/design-better-forms-96fadca0f49c#.tq12xdk3z for an example of what we are trying to achieve.

To implement this type of button group, in your layout:

.. code-block:: python

    self.helper.layout = Layout(
      ...
      Field('field_name', template='crispy_templates/radio_btngroup_field.html'),
      ...
    )

Then add the javascript to the bottom of your page in the template:

.. code-block:: python

{% block script %}
  {% static 'crispy_templates/js/crispy_templates.js' %}
{% endblock %}

The select in the form will now render as a button group.
  **Note** - You need the `buttons.js` javascript included in your html. See https://getbootstrap.com/javascript/#buttons
