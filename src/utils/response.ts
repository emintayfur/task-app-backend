export const success = (data: any) => ({
  success: true,
  data,
  errors: [],
});

export const error = (...errors) => ({
  success: false,
  data: null,
  errors,
});
