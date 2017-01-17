=============================
crispy-templates
=============================

.. image:: https://badge.fury.io/py/crispy-templates.png
    :target: https://badge.fury.io/py/crispy-templates

A collection of useful templates for customizing crispy forms layouts.

Documentation
-------------

The full documentation is at https://crispy-templates.readthedocs.io.

Quickstart
----------

crispy-templates depends on [crispy-forms](https://github.com/django-crispy-forms/django-crispy-forms#django-crispy-forms), make sure that you have properly installed crispy forms first.

Install crispy-templates::

    pip install crispy-templates

Add it to your `INSTALLED_APPS`:

.. code-block:: python

    INSTALLED_APPS = (
        ...
        'crispy_templates.apps.CrispyTemplatesConfig',
        ...
    )

Define your layout template in the `crispy_forms.helper.FormHelper` object:

.. code-block:: python
    from crispy_forms.helper import FormHelper
    from crispy_forms.layout import Field, Layout

    class BookForm(forms.ModelForm):
        def __init__(self, *args, **kwargs):
            super(BookForm, self).__init__(*args, **kwargs)
            self.helper = FormHelper()
            self.helper.template_pack = "bootstrap3"
            self.helper.layout = Layout(
                Field('publication_status', template="crispy_templates/layouts/radio_btngroup_field.html"),
            )

Add the javascript by running `python manage.py collectstatic` and then including it in your template:

.. code-block:: python

    {% static 'crispy_templates/js/crispy_templates.js' %}

Preferably add it to the footer of your page so as to not delay the page load.
  **Note** - Currently only supports the `bootstrap3` template pack that comes with `crispy_forms`.

Credits
-------

Tools used in rendering this package:

*  Cookiecutter_
*  `cookiecutter-djangopackage`_

.. _Cookiecutter: https://github.com/audreyr/cookiecutter
.. _`cookiecutter-djangopackage`: https://github.com/pydanny/cookiecutter-djangopackage
