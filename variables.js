const inputs = document.querySelectorAll('.controls input');

const handleUpdate = event => {

    if ( ! event?.target?.value || ! event?.target?.name )
        return;

    const suffix = event?.target?.dataset?.sizing || '';
    const propertyName = event?.target?.name;
    const value = event?.target?.value + suffix;

    document.documentElement.style.setProperty(
        `--${ propertyName }`,
        value
    );

};

inputs.forEach(
    input => input.addEventListener(
        'change',
        handleUpdate
    )
);

inputs.forEach(
    input => input.addEventListener(
        'mousemove',
        handleUpdate
    )
);