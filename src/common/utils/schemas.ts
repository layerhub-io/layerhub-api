import { z } from 'zod';

function toNumber(val: string | undefined | null, ctx: z.RefinementCtx) {
  if (!val) {
    return undefined;
  }

  const parsed = parseInt(val);
  if (isNaN(parsed)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Not a number'
    });
    return z.NEVER;
  }
  return parsed;
}

export const LIST_FONTS_REQUEST = z.object({
  postScriptName: z.string().optional(),
  take: z.string().optional().transform(toNumber),
  skip: z.string().optional().transform(toNumber)
});

export const SEARCH_FONTS_REQUEST = z.object({
  postScriptName: z.string().optional(),
  take: z.string().optional().transform(toNumber),
  skip: z.string().optional().transform(toNumber)
});

export const LIST_DESIGNS_REQUEST = z.object({
  take: z.string().optional().transform(toNumber),
  skip: z.string().optional().transform(toNumber)
});

export const SEARCH_DESIGNS_REQUEST = z.object({
  published: z.boolean().optional(),
  take: z.string().optional().transform(toNumber),
  skip: z.string().optional().transform(toNumber)
});

export const SIGNUP_REQUEST = z.object({
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string'
    })
    .email('Email is not valid'),
  username: z.string({
    required_error: 'Username is required',
    invalid_type_error: 'Username must be a string'
  }),
  password: z
    .string({
      required_error: 'Password is required',
      invalid_type_error: 'Password must be a string'
    })
    .min(8, 'Password too short')
});

export const CREATE_DESIGN_REQUEST = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'name must be a string'
  }),
  description: z.string({
    required_error: 'Description is required',
    invalid_type_error: 'description must be a string'
  })
});

export const SIGNIN_REQUEST = z.object({
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string'
    })
    .email('Email is not valid'),
  password: z
    .string({
      required_error: 'Password is required',
      invalid_type_error: 'Password must be a string'
    })
    .min(8, 'Password too short')
});
