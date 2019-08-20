import React from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

const SignupForm = (props) => {
    const {
        values: { name, gender, email, password },
        errors,
        touched,
        handleChange,
        handleSubmit,
        isValid,
        setFieldTouched
    } = props;

    const change = (name, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
    };
    return (
        <React.Fragment>
            <Grid
                item
                height="100%"
                style={{textAlign: "center"}}
            >
                <form
                    style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}
                    onSubmit={handleSubmit}
                >
                    <TextField
                        id="name"
                        name="name"
                        label="Name"
                        helperText={touched.name ? errors.name : ""}
                        error={touched.name && Boolean(errors.name)}
                        value={name}
                        onChange={change.bind(null, "name")}
                        fullWidth
                        margin="dense"
                    />
                    <FormControl component="fieldset">
                        <RadioGroup
                            aria-label="gender"
                            name="gender"
                            value={gender}
                            onChange={change.bind(null, "gender")}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        helperText={touched.email ? errors.email : ""}
                        error={touched.email && Boolean(errors.email)}
                        value={email}
                        onChange={change.bind(null, "email")}
                        fullWidth
                        margin="dense"
                    />
                    <TextField
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        helperText={touched.password ? errors.password : ""}
                        error={touched.password && Boolean(errors.password)}
                        value={password}
                        onChange={change.bind(null, "password")}
                        fullWidth
                        margin="dense"
                    />{' '}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="medium"
                        style={{
                            marginTop: "2rem",
                        }}
                    >
                        Create Account
                    </Button>
                </form>
            </Grid>
        </React.Fragment>
    )
};

export default SignupForm;