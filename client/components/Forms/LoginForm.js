import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const LoginForm = (props) => {
    const {
        values: { email, password },
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
                        Sign In
                    </Button>
                </form>
            </Grid>
        </React.Fragment>
    )
};

export default LoginForm;