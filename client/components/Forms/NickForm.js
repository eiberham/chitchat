import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const NickForm = props => {
    const {
        values: { nickname },
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
        <>
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
                        id="nickname"
                        name="nickname"
                        label="Nickname"
                        helperText={touched.nickname ? errors.nickname : ""}
                        error={touched.nickname && Boolean(errors.nickname)}
                        value={nickname}
                        onChange={change.bind(null, "email")}
                        fullWidth
                        margin="dense"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="medium"
                        style={{
                            marginTop: "2rem",
                        }}
                    >
                        Set Nickname
                    </Button>
                </form>
            </Grid>
        </>
    )
};

export default NickForm;