import React from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const ChatForm = (props) => {
    const {
        values: { message },
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

    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
    };

    return (
        <React.Fragment>
            <Grid>
                <form onSubmit={handleSubmit} style={flexContainer}>
                    <TextField
                        id="message"
                        name="message"
                        label="Message"
                        helperText={touched.message ? errors.message : ""}
                        error={touched.message && Boolean(errors.message)}
                        value={message}
                        onChange={change.bind(null, "message")}
                        variant="outlined"
                        fullWidth
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        size="small"
                        style={{
                            marginLeft: "1rem",
                        }}
                        disabled={!isValid}
                    >
                        Send
                    </Button>
                </form>
            </Grid>
        </React.Fragment>
    )
};

export default ChatForm