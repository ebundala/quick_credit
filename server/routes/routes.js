/**
 * Created by ebundala on 5/15/2019.
 */
import Express from "express"

import signup from "../controllers/Signup"
import signin from "../controllers/Signin"
import verifyUser from "../controllers/VerifyUser"
import getLoanById from "../controllers/GetSpecificLoan"
import getLoanByStatus from "../controllers/GetLoansByStatus"
import authorizeLoan from "../controllers/ApproveOrRejectLoan"
import applyForLoan from "../controllers/ApplyForNewLoan"
import repaymentHistory from "../controllers/GetRepaymentHistoryOfALoan"
import repayLoan from "../controllers/PostARepaymentOfALoan"
import auth from "../middleware/auth"

const router = Express.Router();

router.post("/api/v1/auth/signup",signup)

router.post("/api/v1/auth/signin",signin)

router.patch("/api/v1/users/:email/verify",auth)
router.patch("/api/v1/users/:email/verify",verifyUser)


router.get("/api/v1/loans/:loanId",getLoanById)

router.patch("/api/v1/loans/:loanId",authorizeLoan)

router.get("/api/v1/loans",getLoanByStatus)

router.post("/api/v1/loans",applyForLoan)

router.get("/api/v1/loans/:loanId/repayments",repaymentHistory)

router.post("/api/v1/loans/:loanId/repayments",repayLoan)

router.get("/api/v1/ping",(req,res)=>{res.send("OK")})


export default router;