import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

interface SearchProps {
  inputValue: string;
  placeholder: string;
  buttonText?: string;
  sx: object;
  onInputChange: (val: string) => void;
  onSearch: () => void;
}

export const Search: React.FC<SearchProps> = ({
  inputValue,
  placeholder,
  buttonText,
  sx = {},
  onInputChange,
  onSearch,
}) => {
  const defaultSearchButtonText = "Search";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch();
    }
  };

  const handleClearFilter = () => {
    onInputChange("");
  };

  return (
    <Box
      sx={{ display: "flex", alignItems: "stretch", gap: 1, ...sx }}
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField
        sx={{ flex: 1, height: "100%" }}
        inputMode="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        autoFocus
        InputProps={{
          endAdornment: inputValue && (
            <InputAdornment position="end">
              <IconButton
                sx={{
                  cursor: "pointer",
                }}
                onClick={handleClearFilter}
                size="small"
              >
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        variant="contained"
        color="primary"
        type="button"
        disableElevation
        sx={{ minHeight: "100%", whiteSpace: "nowrap" }}
        disabled={inputValue === ""}
        onClick={onSearch}
      >
        {buttonText ?? defaultSearchButtonText}
      </Button>
    </Box>
  );
};
